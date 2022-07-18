class UsersController < ApplicationController
    
    def show
        if current_user 
          render json: current_user, status: :ok
        else
          render json: { error: "No active session"}, status: :unauthorized
        end
      end
    
      def index
        users = User.all
        render json: users
      end
    
      # POST /signup
      def create
        user = User.create!(user_params) 
        if (user)
          UserMailer.with(user: user).new_user_email.deliver_later
          session[:user_id] = user.id
          render json: user, status: :ok
        else 
          render json: { error: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
        end
      end
        
      private
    
        def user_params
          params.permit(:username, :password, :password_confirmation, :email)
        end
end
