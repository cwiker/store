class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id, :order_id, :item_price
end
