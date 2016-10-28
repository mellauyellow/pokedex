class Api::PokemonController < ApplicationController
  def index
    sleep 2
    @pokemon = Pokemon.all
  end

  def show
    sleep 2
    @pokemon = Pokemon.find_by_id(params[:id])
  end

  def update
    sleep 2
    @pokemon = Pokemon.find_by_id(params[:id])

    if @pokemon.update_attributes(pokemon_params)
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def create
    sleep 2
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def destroy
    sleep 2
    @poke = Pokemon.find_by_id(params[:id])
    @poke.delete
    @pokemon = Pokemon.all

    render :index
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name,
                                    :attack,
                                    :defense,
                                    :poke_type,
                                    :image_url,
                                    moves: [])
  end

end
