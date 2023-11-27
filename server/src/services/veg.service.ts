import Vegetable, { IVegetable } from "../models/veg.model";

class VegService {
  async getAllVegetables(): Promise<IVegetable[]> {
    return Vegetable.find();
  }

  async getVegetableById(vegId: string): Promise<IVegetable | null> {
    return Vegetable.findById(vegId);
  }

  async createVegetable(vegData: IVegetable): Promise<IVegetable> {
    return Vegetable.create(vegData);
  }

  async updateVegetable(
    vegId: string,
    updatedData: Partial<IVegetable>
  ): Promise<IVegetable | null> {
    return Vegetable.findByIdAndUpdate(vegId, updatedData, { new: true });
  }

  async deleteVegetable(vegId: string): Promise<void> {
    await Vegetable.findByIdAndDelete(vegId);
  }
}

export default new VegService();
