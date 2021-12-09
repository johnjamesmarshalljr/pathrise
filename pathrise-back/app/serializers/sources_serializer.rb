require 'jsonapi-serializers'

class SourcesSerializer
  include JSONAPI::Serializer

  attribute :name
  attribute :rating
  attribute :root_domain
  attribute :logo_file
  attribute :description

  has_many :opportunities
end