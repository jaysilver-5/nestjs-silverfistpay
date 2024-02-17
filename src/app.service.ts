import { Injectable } from '@nestjs/common';
import * as coinbase from 'coinbase-commerce-node';

coinbase.Client.init('f255607a-e2b1-4f4b-b16a-f6b51ed468e1');


@Injectable()
export class AppService {
  async checkout(checkoutData: any): Promise<{ Payment_Url: string }> {
    const { amount, currency, cryptoCurrency } = checkoutData;
    try {
      const charge = await coinbase.resources.Charge.create({
        name: 'SilverFist Exchange',
        description: 'Transaction in style',
        pricing_type: 'fixed_price', // Include pricing_type
        local_price: {
          amount: amount,
          currency: currency,
        },
        metadata: {
          userId: "22"
        },
        redirect_url: `http://159.223.51.198:5000/`,
        cancel_url: `http://159.223.51.198:5000/#/dashboard`,
        pricing: {
          type: 'fixed_price',
          local: {
            amount: amount,
            currency: currency,
          },
          crypto: {
            amount: amount,
            currency: cryptoCurrency,
          }
        },
      });

      return { Payment_Url: charge.hosted_url };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
