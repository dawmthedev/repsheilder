# Cron Job Setup for Daily Health Check

## Option 1: Vercel Cron Jobs (Recommended if using Vercel)

Create a `vercel.json` file in your project root:

```json
{
  "crons": [
    {
      "path": "/api/cron-health-check",
      "schedule": "0 21 * * *"
    }
  ]
}
```

This will run every day at 9 PM PST (21:00).

## Option 2: External Cron Service

Use a service like:
- [Cron-job.org](https://cron-job.org)
- [EasyCron](https://www.easycron.com)
- [UptimeRobot](https://uptimerobot.com)

Set up a GET request to:
```
https://your-domain.com/api/cron-health-check
```

Schedule: `0 21 * * *` (9 PM PST)

## Option 3: Server Cron (if you have a server)

Add to your crontab:
```bash
crontab -e
```

Add this line:
```bash
0 21 * * * curl -s https://your-domain.com/api/cron-health-check
```

## Security (Optional)

If you want to secure the endpoint, set a cron secret in your `.env`:
```
CRON_SECRET=your-secret-key
```

Then update the cron route to check for this secret in headers.

## What to Expect

- Daily test SMS at 9 PM PST
- Daily webhook call to LeadConnector
- Server logs tagged `[CRON_LEAD_NOTIFY]`
- Email notification if the service goes down (you can add this to the catch block)

## Testing

You can test the endpoint manually:
```
https://your-domain.com/api/cron-health-check
```

## Disabling

To disable, remove the cron configuration or comment out the route handler.
