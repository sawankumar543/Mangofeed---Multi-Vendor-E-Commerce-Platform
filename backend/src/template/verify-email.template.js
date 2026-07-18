function getVerifyEmailTemplate({ user, verificationUrl, expiryMinutes, }) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mangofeed - Email Verify</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f5f7; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
                    <!-- Header Section -->
                    <tr>
                        <td style="background-color: #ffb703; padding: 30px 40px; text-align: center;">
                            <img width="60" src="https://png.pngtree.com/png-vector/20220912/ourmid/pngtree-mango-cartoon-fruit-png-image_6172613.png" alt="mangoImage" style="display: block; margin: 0 auto 10px auto; vertical-align: middle;">
                            <h2 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: 0.5px;">Mangofeed</h2>
                        </td>
                    </tr>
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px; color: #333333;">
                            <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 20px; color: #222222;">Hello ${user},</h3>
                            <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #555555;">Welcome to Mangofeed!</p>
                            <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.5; color: #555555;">Please verify your email to activate your account.</p>
                            
                            <!-- CTA Button -->
                            <div style="text-align: center; margin-bottom: 30px;">
                                <a href="${verificationUrl}" style="background-color: #fb8500; color: #ffffff; text-decoration: none; padding: 14px 35px; font-size: 16px; font-weight: 600; border-radius: 8px; display: inline-block; box-shadow: 0 3px 6px rgba(251, 133, 0, 0.2);">Verify Email</a>
                            </div>

                            <p style="margin: 0 0 20px 0; font-size: 13px; color: #e63946; font-weight: 500; text-align: center;">⏱️ This verification link expires in ${expiryMinutes} minutes.</p>
                            
                            <hr style="border: 0; border-top: 1px solid #eef0f4; margin: 25px 0;">
                            
                            <!-- Fallback Link -->
                            <p style="margin: 0 0 8px 0; font-size: 12px; color: #777777;">If the button doesn't work, copy and paste the link below into your browser:</p>
                            <p style="margin: 0; font-size: 12px; word-break: break-all; color: #fb8500;"><a href="${verificationUrl}" style="color: #fb8500; text-decoration: none;">${verificationUrl}</a></p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                    <td style="background-color: #fafafa; padding: 20px 40px; text-align: center; border-top: 1px solid #eef0f4;">
                        <p style="margin: 0; font-size: 12px; color: #999999;">If you didn't create this account, you can safely ignore this email.</p>
                    </td>
                        <td style="background-color: #fafafa; padding: 20px 40px; text-align: center; border-top: 1px solid #eef0f4;">
                            <p style="margin: 0; font-size: 12px; color: #999999;">&copy; 2026 Mangofeed. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}

export default getVerifyEmailTemplate