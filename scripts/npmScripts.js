var tinify = require('tinify');
tinify.key = "oIV8aV0vp7kjeRY2TL9UtsjArdxtEDhE";
tinify.fromFile("images/image1.jpg").toFile("build/images/optimized_image1.jpg");
tinify.fromFile("images/image2.jpg").toFile("build/images/optimized_image2.jpg");
tinify.fromFile("images/image3.jpg").toFile("build/images/optimized_image3.jpg");
tinify.fromFile("images/image4.jpg").toFile("build/images/optimized_image4.jpg");
