require 'jsonapi-serializers'

class OpportunitiesSerializer
  include JSONAPI::Serializer

  attribute :job_url
  attribute :company_name
  attribute :job_title

  attribute :source_name do |object|
    binding.pry
    object.source.name
  end

  belongs_to :source

end