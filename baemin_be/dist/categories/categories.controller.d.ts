import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryService } from './categories.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    findAll(limit?: number, skip?: number, cursor?: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: number | null;
        created_at: Date | null;
        updated_at: Date | null;
        cate_name: string | null;
        cate_description: string | null;
        cate_icon: string | null;
    }>;
}
