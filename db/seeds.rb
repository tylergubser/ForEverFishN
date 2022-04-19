# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

User.destroy_all
Catch.destroy_all

bait = [
    "Nightcrawler",
    "Redworm",
    "Leech",
    "Minnow",
    "Worm",
    "Cricket",
    "Grasshopper",
    "Nymph",
    "Streamer",
    "Dry Fly"
]

fish_type = {
    "Sword Fish" => "https://static.scientificamerican.com/sciam/cache/file/77D0F890-9F3B-4CA6-866EF32925B2A70E_source.jpg",
    "Cod" => "https://i0.wp.com/bdn-data.s3.amazonaws.com/uploads/2021/04/Cod-Fishing.jpg?fit=1024%2C576&ssl=1",
    "Mackerel" => "https://fishtalkmag.com/sites/default/files/inline-images/spanish-mackerel_7.jpg",
    "Trout" => "https://www.howtocatchanyfish.com/uploads/8/8/0/2/8802125/fixeddsc01695_orig.jpg",
    "Salmon" => "https://media1.fdncms.com/northcoast/imager/u/mobilestory/19878492/fishing-01-f7ee115bbdf6d470.jpg",
    "Tuna" => "https://www.santacruzsentinel.com/wp-content/uploads/2021/09/STC-L-FISHRAP-1001-01.jpg",
    "Shark" => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fftw.usatoday.com%2F2021%2F05%2Fangler-resorts-to-handlining-to-catch-record-shark-calls-it-surreal&psig=AOvVaw2ofggEA9B1X_HIy9BAGp07&ust=1650476188659000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjito7VoPcCFQAAAAAdAAAAABAK",
    "Red Mullet" => "https://www.portlincolntimes.com.au/images/transform/v1/crop/frm/32ui8UE6ZJbtvC4phXfSTtM/e4bcb528-acf0-401f-b6d4-91fe14af2fd8.jpg/r0_55_2048_1261_w1200_h678_fmax.jpg",
    "Barramundi" => "https://preview.redd.it/skarildoxfv11.jpg?auto=webp&s=436ad1763b039af2b1f0dff019dd17074d1ea466",
    "Bluefish" => "http://www.floridashorefishing.com/wp-content/uploads/2014/12/112608-bluefish-6.jpg",
    "Carp" => "https://s.hdnux.com/photos/01/06/42/63/18492617/4/1200x0.jpg",
    "Catfish" => "https://www.fieldandstream.com/uploads/2019/01/18/G4BGZ26BKSRMHYZDF6IVNWBIVM.jpg?auto=webp",
    "Pike" => "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oaklakelodge.com%2Fhow-to-catch-pike-during-your-trip&psig=AOvVaw3vvsqE8z_1_Z_KcQjwTFL6&ust=1650476373019000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMD4gefVoPcCFQAAAAAdAAAAABAK",
    "Crappie" => "https://cdn.shopify.com/s/files/1/2113/5683/files/World_Record_Black_Crappie_1024x1024.JPG?v=1536204089",
    "Largemouth Bass" => "https://dtu72n8giq3eh.cloudfront.net/920x690/smart/filters:no_upscale()/0yn7sqg5wq11i9yzpwa5lqhxfsbh",
    "Minnow" => "https://static.wixstatic.com/media/792757_a48fef06b0594ed6b9d5bba09fbaf955~mv2_d_2337_2339_s_2.jpg/v1/fill/w_1000,h_1001,al_c,q_90,usm_0.66_1.00_0.01/792757_a48fef06b0594ed6b9d5bba09fbaf955~mv2_d_2337_2339_s_2.jpg",
    "Artic Char" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53afB5KndwiOeiorZcD_8M960oiZEIARPVg&usqp=CAU"
}

puts "Creating users..."
50.times do
    User.create(username: Faker::Artist.name, password: Faker::Artist.name)
end

200.times do
    fish = fish_type.to_a.sample
    Catch.create(baits: bait.sample, fish_type: fish[0], photo: fish[1], user_id: User.ids.sample)
end


puts "Seeding done!"
