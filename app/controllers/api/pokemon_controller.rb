class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])
  end

  def update
    @pokemon = Pokemon.find_by_id(params[:id])

    if @pokemon.update_attributes(pokemon_params)
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def destroy
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
                                    :moves,
                                    :image_url)
  end

end
