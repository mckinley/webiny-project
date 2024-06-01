[mustacherides.com](https://mustacherides.com/)

Making mustache rides ok agin. <3

Get project with one of these:

`gh repo clone mckinley/webiny-project`

`git clone git@github.com:mckinley/webiny-project.git`

`git clone https://github.com/mckinley/webiny-project.git`


then

`cd webiny-project`

`yarn`

You'll need creds for an AdministratorAccess user in AWS.
The project was set up with https://www.webiny.com/docs/get-started/install-webiny so maybe that helps.
Basically you'll need to set up a CLI user in IAM and then configure your ~/.aws/credentials file.

## Deploy to Production:

If you want to keep a terminal session only for prod:

`export AWS_PROFILE=mustacherides`

Single use:

`AWS_PROFILE=mustacherides yarn webiny deploy --env prod`

## Deploy to Development:

If you want to keep a terminal session only for dev:

`export AWS_PROFILE=dev-mustacherides`

Single use:

`AWS_PROFILE=dev-mustacherides yarn webiny deploy --env dev`
