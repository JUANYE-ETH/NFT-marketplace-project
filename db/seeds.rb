require 'faker'

puts "🌱 Seeding data...."

# User.destroy_all
# NftCollection.destroy_all
# Nft.destroy_all
# Comment.destroy_all

#Create 10 users
10.times do
   user = User.create!(
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password,
        admin: Faker::Boolean.boolean(true_ratio: 0.2)
    )
end

#Create 5 Nft_collections
5.times do
    nft_collection = NftCollection.create!(
        made_by: Faker::Game.title
    )
end

# Create 10 NFTs
10.times do
   Nft.create!(
        nft_name: Faker::Game.title,
        description: Faker::Lorem.paragraph(sentence_count: 2),
        price: Faker::Number.decimal(l_digits: 3, r_digits: 2),
        user_id: (1..10).to_a.sample,            
        image: "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/all",
        nft_collection_id: (1..5).to_a.sample
    )
end

# Create 10 comments
10.times do
    Comment.create!(
        content: Faker::Lorem.paragraph(sentence_count: 1),
        nft_id: (1..10).to_a.sample, 
        user_id: (1..10).to_a.sample
    )
end

puts "✅ Done!"