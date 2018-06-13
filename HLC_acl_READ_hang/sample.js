/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Update the Buyer notes
 * @param {org.example.basic.UpdateOrder_BuyerNotes} tx_UpdateOrder_BuyerNotes 
 * @transaction
 */
async function tx_UpdateOrder_BuyerNotes(incomingData) {

    // incomingData: Order order; String newNotes

    const namespace = 'org.example.basic';

    // update the order
    const order = incomingData.order;
    order.buyerNotes = incomingData.newNotes;
    const assetRegistry = await getAssetRegistry(namespace + '.Order');
    await assetRegistry.update(order);
}

/**
 * Update the Seller notes
 * @param {org.example.basic.UpdateOrder_SellerNotes} tx_UpdateOrder_SellerNotes 
 * @transaction
 */
async function tx_UpdateOrder_SellerNotes(incomingData) {

    // incomingData: Order order; String newNotes

    const namespace = 'org.example.basic';

    // update the order
    const order = incomingData.order;
    order.sellerNotes = incomingData.newNotes;
    const assetRegistry = await getAssetRegistry(namespace + '.Order');
    await assetRegistry.update(order);
}
