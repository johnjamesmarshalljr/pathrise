require 'jsonapi-serializers'

class OpportunitiesSerializer
  include JSONAPI::Serializer

  attribute :job_url
  attribute :company_name
  attribute :job_title

  attribute :source_name do |object|
    object.name
  end

end