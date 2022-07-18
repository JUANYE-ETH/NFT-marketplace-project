class NftCollectionsController < ApplicationController

  #GET /collection
  def index
    collections = NftCollection.all
    render json: collections, status: :ok
  end

  #GET /collection/1
  def show
    collection = find_collection
    render json: collection
  end

  private
  
    def find_collection
       NftCollection.find(params[:id])
    end

end
