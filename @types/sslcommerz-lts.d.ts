/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
declare module 'sslcommerz-lts' {
    interface SSLCommerzOptions {
        store_id: string;
        store_passwd: string;
        is_live: boolean;
    }

    interface PaymentData {
        tran_id: string;
        total_amount: number;
        currency: string;
        success_url: string;
        fail_url: string;
        cancel_url: string;
        emi_option?: number;
        customer_name?: string;
        customer_email?: string;
        customer_phone?: string;
        customer_address_1?: string;
        customer_city?: string;
        customer_postcode?: string;
        customer_country?: string;
    }

    const sslcommerz: {
        init(data: PaymentData, options?: SSLCommerzOptions): Promise<any>;
    };

    export default sslcommerz;
}
