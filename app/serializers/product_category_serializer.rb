class ProductCategorySerializer < ActiveModel::Serializer
  attributes :id, :product_id, :category_id
end
