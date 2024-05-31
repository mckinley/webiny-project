import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
    domains({ params }) {
        const { env } = params.run;
        if (env === "prod") {
            return {
                domains: ["mustacherides.com", "*.mustacherides.com"],
                sslSupportMethod: "sni-only",
                acmCertificateArn:
                    "arn:aws:acm:us-west-1:905418069383:certificate/5473c931-cb36-4335-afbd-33424f271b78"
            };
        }
    }
});
