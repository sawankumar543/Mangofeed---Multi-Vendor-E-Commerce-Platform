import crypto from "crypto";

export function generateEmailVerificationToken() {
    return crypto.randomBytes(32).toString("hex");
}

export function generatePasswordResetToken() {
    return crypto.randomBytes(32).toString("hex");
}