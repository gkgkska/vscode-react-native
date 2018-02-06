// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

export class ACStrings {
    public static UserMustSignIn: string = "You are signed out. Please login to App Center";
    public static SelectLoginTypeMsg: string = "Please select the way you would like to login to AppCenter";
    public static PleaseProvideToken: string = "Please provide token to authenticate";
    public static PleaseLoginViaBrowser: string = "Please login to AppCenter in the browser window we will open, then enter your token from the browser to vscode";
    public static UserLoggedOutMsg: string = "Successfully logged out from App Center";
    public static UserIsNotLoggedInMsg: string = "You are not logged in to App Center";
    public static LogoutPrompt: string = "Please execute logout to signoff from App Center";
    public static NoCodePushDetectedMsg: string = "Please install React Native Code Push package to run this command!";
    public static NoCurrentAppSetMsg: string = "No current app";
    public static NoCurrentDeploymentSetMsg: string = "No current deployment";
    public static PleaseProvideCurrentAppMsg: string = "Please click here to specify current app";
    public static PleaseProvideCurrentDeploymentMsg: string = "Please click here to specify current deployment";
    public static ProvideCurrentAppPromptMsg: string = "Please specify existant current app";
    public static InvalidCurrentAppNameMsg: string = "Sorry, provided app name is invalid";
    public static FailedToExecuteLoginMsg: string = "Failed to execute login to App Center";
    public static SelectCurrentDeploymentMsg: string = "Please select current deployment";

    public static YouAreLoggedInMsg: (name: string) => string = (name: string) => {
         return `You are logged in to App Center as ${name}`;
    }
    public static YourCurrentAppMsg: (appName: string) => string = (appName: string) => {
        return `Your current app is ${appName}`;
    }
    public static YourCurrentDeploymentMsg: (deploymentName: string) => string = (deploymentName: string) => {
        return `Your current deployment is ${deploymentName}`;
    }
}