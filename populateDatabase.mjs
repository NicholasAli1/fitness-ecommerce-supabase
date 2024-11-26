import Product from "./src/models/Product"; // Import the Product model

const addFitnessEquipmentProducts = async () => {
  try {
    // Define all the fitness equipment to be added
    const fitnessEquipmentArray = [
      {
        name: "Adjustable Dumbbells",
        description: "A pair of adjustable dumbbells for strength training.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "Adjustable Dumbbells",
          brand: "FitPro",
          category: "Dumbbells",
          stock: 50,
        },
        price: 99.99,
        images: ["image_url1", "image_url2"],
        stock: 50,
      },
      {
        name: "Treadmill",
        description: "High-performance treadmill for home workouts.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "Treadmill",
          brand: "RunMaster",
          category: "Cardio",
          stock: 20,
        },
        price: 599.99,
        images: ["image_url3", "image_url4"],
        stock: 20,
      },
      {
        name: "Resistance Bands Set",
        description: "A set of durable resistance bands for strength training.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "Resistance Bands",
          brand: "PowerBands",
          category: "Accessories",
          stock: 100,
        },
        price: 29.99,
        images: ["image_url5", "image_url6"],
        stock: 100,
      },
      {
        name: "Bench Press Machine",
        description: "Heavy-duty bench press machine for chest exercises.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "Bench Press Machine",
          brand: "StrengthMaster",
          category: "Weight Machines",
          stock: 10,
        },
        price: 499.99,
        images: ["image_url7", "image_url8"],
        stock: 10,
      },
      {
        name: "Squat Rack",
        description: "Durable squat rack for leg workouts and squats.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "Squat Rack",
          brand: "IronStrength",
          category: "Weight Machines",
          stock: 15,
        },
        price: 199.99,
        images: ["image_url9", "image_url10"],
        stock: 15,
      },
      {
        name: "10lb Dumbbell",
        description: "A 10lb dumbbell for light weight training.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "10lb Dumbbell",
          brand: "IronGrip",
          category: "Dumbbells",
          stock: 200,
        },
        price: 19.99,
        images: ["image_url11", "image_url12"],
        stock: 200,
      },
      // Add more dumbbells from 10lb to 80lb in 10lb increments
      {
        name: "20lb Dumbbell",
        description: "A 20lb dumbbell for moderate weight training.",
        category: "603f7bcd4f9b3b001f98a8c3", // Category ID
        fitnessEquipment: {
          name: "20lb Dumbbell",
          brand: "IronGrip",
          category: "Dumbbells",
          stock: 150,
        },
        price: 29.99,
        images: ["image_url13", "image_url14"],
        stock: 150,
      },
      // Repeat for 30lb, 40lb, ..., up to 80lb

      // Add more equipment as needed (e.g., barbells, plates, calf raise machines)
    ];

    // Loop through the fitness equipment array and insert each product into the database
    for (const equipment of fitnessEquipmentArray) {
      const product = new Product(equipment);
      await product.save();
    }

    console.log("All fitness equipment products added successfully!");
  } catch (err) {
    console.error("Error adding products:", err);
  }
};

addFitnessEquipmentProducts();
