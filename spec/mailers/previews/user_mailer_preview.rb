# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
    def new_user_email
        # Set up a temporary User for the preview
        user = User.new(username: "Joe", email: "joe@gmail.com")
    
        UserMailer.with(user: user).new_user_email

    end
end