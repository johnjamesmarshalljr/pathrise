class OpportunitiesController < ApplicationController
  before_action :set_opportunity, only: %i[ show edit update destroy ]

  # GET /opportunities or /opportunities.json
  def index
    @opportunities = Opportunity.all.order(id: :desc)
    render json: OpportunitiesSerializer.new(@opportunities).to_json
  end

end
