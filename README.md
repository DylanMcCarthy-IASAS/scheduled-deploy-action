#Scheduled-deploy-action

This action waits until the scheduled time before continuing.

## Inputs

## 'target-time'

**Required** The time to wait until

## Outputs

## 'deplyoment-time'

The time deployment was resumed

## Example usage

uses: actions/scheduled-deploy-action@v1.0
with:
    target-time: '23:00'