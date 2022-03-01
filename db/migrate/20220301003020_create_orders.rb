class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :status
      t.integer :user_id
      t.integer :total_price
      t.integer :total_quantity
    end
  end
end
