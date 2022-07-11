class LikesController < ApplicationController
    
    def create
        newlikes = Like.create(likesParams)
        if newlikes.valid?
            render json: newlikes
        else
            render json: {errors:["invalid"]}, status:404
        end
    end

    private

    def likesParams
        params.permit(:user_id,:post_id)
    end
    
end
