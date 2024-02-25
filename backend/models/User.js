const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (password) {
                // Define your password requirements using a regular expression
                // For example, requiring at least one uppercase letter, one lowercase letter, and one digit
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                return passwordRegex.test(password);
            },
            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit, and be at least 8 characters long.'
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
});
