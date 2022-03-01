class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :total_price, :total_qty
end
