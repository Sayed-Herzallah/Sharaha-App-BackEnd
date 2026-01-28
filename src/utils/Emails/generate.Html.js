// ================= import modules =================
export const signUp = ({ link }) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; }
        .header { background: #4CAF50; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .button { display: inline-block; padding: 12px 30px; background: #4CAF50; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f9f9f9; padding: 20px; text-align: center; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome! 🎉</h1>
        </div>
        
        <div class="content">
            <h2>Hello!</h2>
            <p>Thank you for signing up. Click the button below to activate your account:</p>
            
            <a href="${link}" class="button">Activate Account</a>
            
            <p style="color: #999; font-size: 14px;">This link expires in 24 hours.</p>
        </div>
        
        <div class="footer">
            <p>© 2025 Your Company</p>
        </div>
    </div>
</body>
</html>
    `;
};