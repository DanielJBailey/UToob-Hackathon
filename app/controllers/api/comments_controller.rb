class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :destroy]
  before_action :authenticate_user!

  def index
    render json: Comment.all
  end

  def create
    comment = Commnet.new(comment_params)
    comment.user_id = params[:user_id]
    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def destroy
    @comment.destory
  end


  def show
    render json: @comment
  end

end

private

    def set_comment
      @comment = current_user.videos.comments.find(params[:id])
    end

    def video_params
      params.require(:comment).permit(:body,)
    end




