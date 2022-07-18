class NftsController < ApplicationController
    
    before_action :set_nft, only: [:show, :update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]
    
  #GET /nfts
  def index
    nfts = Nft.all
    render json: nfts
  end

  #GET /nft/1
  def show
    render json: @nft
  end

  #POST /nfts
  def create
    nft = current_user.nfts.create!(nft_params)
    if nft.id
      render json: nft, include:['category'], status: :created
    else
      render json:{error: nft.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  #PATCH /nfts/1
  def update
    if @nft
      @nft.update(nft_params)
      render json: @nft, status: :accepted
    else
      render json: @nft.errors, status: :not_found
    end
  end

  #DELETE /nfts/1
  def destroy
    @nft.destroy
    head :no_content
  end

  #Custom controller method #1
  def nfts_by_price
    nfts = Nft.price
    render json: nfts, status: :ok
  end

  #Custom controller method #2
  def order
    nfts = Nft.alpha
    render json: nfts, status: :ok
  end

  #Custom controller method #3
  def nfts_by_date
    nfts = Nft.date
    render json: nfts, status: :ok
  end

  private   
    #  Only allow a list of trusted parameters through.
    def nft_params
      params.permit(:nft_name, :description, :price, :user_id, :image, :nft_collection_id)
    end

    #only for actions with id in their route
    def set_nft
     @nft = Nft.find(params[:id])
    end
  
    def is_authorized
      is_authorized = current_user.admin? || current_user.id == @nft.user_id
      render json: { error: "You are not authorized for this action" }, status: :forbidden unless is_authorized
    end
end
