json.extract! opportunity, :id, :title, :company, :url, :source, :created_at, :updated_at
json.url opportunity_url(opportunity, format: :json)
