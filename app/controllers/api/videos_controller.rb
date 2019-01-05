class Api::VideosController < ApplicationController
  before_action :set_video, only: [:show, :destroy]

  def index
    render json: Video.all
  end

  def show
    render json: @video
  end

  def create
    video = Video.new(video_params)
    if video.save
      render json: video
    else
      render json: video.errors, status: 422
    end
  end

  def destroy
    @video.destroy
  end

  private
    def set_video
      @video = current_user.videos.find(params[:id])
    end

    def video_params
      params.require(:video).permit(:url, :title, :duration, :genre, :description)
    end
end


