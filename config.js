import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";

export const DATABASE = "mongodb+srv://RealEstateUdemy:8BMecoDS6EWPrrHB@realestate.0rask9k.mongodb.net/?retryWrites=true&w=majority";


export const AWS_ACCESS_KEY_ID = "AKIAQOSDFNVZV6DVEC5G";
export const AWS_SECRET_ACCESS_KEY = "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";

export const EMAIL_FROM = '"RealEstate Kitty" <e.eugene1201@gmail.com>';
export const REPLY_TO = "e.eugene1201@gmail.com";


const awsConfig = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: "us-west-2",
    apiVersion:"2010-12-01",
}

export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

export const JWT_SECRET = " HUHS42779BCJH2497ACJRFV3792VDSJK42"; //a random string that is hard to guess
export const CLIENT_URL = "http://localhost:3000";