import { Request, Response } from 'express';
import { orderService } from '../services/order.service';
import { productServices } from '../services/product.service';
const createNewOrder = async (req: Request, res: Response) => {
  try {
    const orderInfo = req.body;
    const productId = orderInfo.product;
    const result = await orderService.createOrder(orderInfo);
    const getSingleProduct = await productServices.getSingleProduct(productId);

    if (!getSingleProduct) {
      throw new Error('Product not found');
    }
    const updateQuery = {
      quantity: getSingleProduct.quantity - orderInfo.quantity,
    };

    await productServices.updateProductFromDB(productId, updateQuery);
    const SingleData = await productServices.getSingleProduct(productId);

    if (!SingleData) {
      throw new Error('Product not found');
    }
    // change stock when product quentity 0
    if (SingleData.quantity <= 0) {
      await productServices.updateProductFromDB(productId, {
        inStock: false,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error._message || 'Someting went wrong',
      error,
    });
  }
};

export const orderControllers = {
  createNewOrder,
};
