class UserMailer < ApplicationMailer
    default from: ENV['GMAIL_USERNAME']

    def new_user_email
        @user = params[:user]
    
        mail(to: "juanyevela@gmail.com", subject: "You got a new user!")
    end
end
