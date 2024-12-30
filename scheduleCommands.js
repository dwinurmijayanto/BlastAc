const schedule = require('node-schedule');
const moment = require('moment-timezone'); // Import moment-timezone
const scheduledJobs = {}; // Object to store all scheduled jobs

const handleScheduleRecurringAction = (pk, m, args, isCreator, reply) => {
    if (!isCreator) return reply('Only the bot creator can schedule recurring actions.');
    if (args.length < 5) return reply('Please provide an action type, timezone, recurrence rule, and parameters.');

    const actionType = args.shift().toLowerCase();
    const timezone = args.shift(); // Get the user's timezone
    const recurrenceRule = args.shift(); // This should be a cron-like string
    const parameters = args.join(' ');
    const createdTime = new Date(); // Store the time when the schedule was created
    const jobId = Date.now().toString();

    // Get the current time in the user's timezone and create a date object for scheduling
    const now = moment().tz(timezone);
    const nextExecutionTime = moment.tz(recurrenceRule, timezone).toDate(); // Convert recurrence rule to date

    const job = schedule.scheduleJob(nextExecutionTime, async () => {
        switch (actionType) {
            case 'sendmessage':
                await pk.sendMessage(m.chat, { text: parameters });
                break;
            case 'runcommand':
                await runCommand(parameters);
                break;
            case 'sendmedia':
                await pk.sendMessage(m.chat, { image: { url: parameters } });
                break;
            default:
                reply('Unknown action type. Available actions: sendmessage, runcommand, sendmedia.');
                return; // Exit the job if the action type is unknown
        }
    });

    scheduledJobs[jobId] = { job, actionType, timezone, recurrenceRule, parameters, createdTime }; // Store job info
    reply(`Recurring action scheduled in timezone ${timezone}. Use job ID: ${jobId} to manage this job.`);
};

const handleShowSchedule = (pk, m, isCreator, reply) => {
    if (!isCreator) return reply('Only the bot creator can view scheduled actions.');

    if (Object.keys(scheduledJobs).length === 0) {
        return reply('No scheduled actions found.');
    }

    let scheduleList = 'Scheduled Actions:\n';
    for (const [id, jobInfo] of Object.entries(scheduledJobs)) {
        scheduleList += `ID: ${id}\nAction: ${jobInfo.actionType}\nTimezone: ${jobInfo.timezone}\nRecurrence Rule: ${jobInfo.recurrenceRule}\nParameters: ${jobInfo.parameters}\nCreated At: ${jobInfo.createdTime.toISOString()}\n\n`;
    }

    reply(scheduleList);
};

// Handle deletion of scheduled actions
const handleDeleteSchedule = (pk, m, args, isCreator, reply) => {
    if (!isCreator) return reply('Only the bot creator can delete scheduled actions.');
    if (args.length < 1) return reply('Please provide the job ID to delete.');

    const jobId = args[0];
    const jobInfo = scheduledJobs[jobId];

    if (!jobInfo) {
        return reply(`No scheduled job found with ID: ${jobId}`);
    }

    jobInfo.job.cancel(); // Cancel the scheduled job
    delete scheduledJobs[jobId]; // Remove from scheduledJobs
    reply(`Scheduled job with ID: ${jobId} has been deleted.`);
};

// Handle editing of scheduled actions
const handleEditSchedule = (pk, m, args, isCreator, reply) => {
    if (!isCreator) return reply('Only the bot creator can edit scheduled actions.');
    if (args.length < 4) return reply('Please provide the job ID, new timezone, new recurrence rule, and new parameters.');

    const jobId = args.shift();
    const newTimezone = args.shift();
    const newRecurrenceRule = args.shift();
    const newParameters = args.join(' ');

    const jobInfo = scheduledJobs[jobId];

    if (!jobInfo) {
        return reply(`No scheduled job found with ID: ${jobId}`);
    }

    jobInfo.job.cancel(); // Cancel the existing job

    // Schedule the new job with updated parameters
    const newJob = schedule.scheduleJob(newRecurrenceRule, async () => {
        switch (jobInfo.actionType) {
            case 'sendmessage':
                await pk.sendMessage(m.chat, { text: newParameters });
                break;
            case 'runcommand':
                await runCommand(newParameters);
                break;
            case 'sendmedia':
                await pk.sendMessage(m.chat, { image: { url: newParameters } });
                break;
            default:
                reply('Unknown action type.');
                return; // Exit the job if the action type is unknown
        }
    });

    // Update job information
    scheduledJobs[jobId] = { job: newJob, actionType: jobInfo.actionType, timezone: newTimezone, recurrenceRule: newRecurrenceRule, parameters: newParameters };
    reply(`Scheduled job with ID: ${jobId} has been updated. New timezone: ${newTimezone}, recurrence rule: ${newRecurrenceRule}, and parameters: "${newParameters}"`);
};

module.exports = {
    handleScheduleRecurringAction,
    handleShowSchedule,
    handleDeleteSchedule,
    handleEditSchedule,
    scheduledJobs, // Export scheduledJobs if needed
};
