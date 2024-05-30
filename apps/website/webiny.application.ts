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
                    "arn:aws:acm:us-east-1:992382537026:certificate/1da5b7ac-35c5-4cde-9f51-aaabbb838ff3"
            };
        }
    }
});
