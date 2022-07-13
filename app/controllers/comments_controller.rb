class CommentsController < ApplicationController
    def create
        newComment = Comment.create(commentParams)
        if newComment.valid?
            render json: newComment
        else
            render json: {errors:["invalid"]}, status:404
        end
    end

    def index
        render json: Comment.all, status: :ok
    end

    private

    def commentParams
        params.permit(:user_id,:content,:nft_id)
    end

end
