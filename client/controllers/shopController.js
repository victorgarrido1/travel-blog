// import ShopItem from '../models/shopModel/ShopItem';


// //get all of the items 
// export const getAllItems = async (req, res) => {
//     try {
//       const items = await ShopItem.find();
//       res.status(200).json(items);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

//   //get the item by the ID
//   export const getItemById = async (req, res) => {
//     try {
//         const item = await ShopItem.findById(req.params.id);
//         if (!item) return res.status(404).json({ message: 'Item not found '});
//         res.status(200).json(item);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//   };



  
  
