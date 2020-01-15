import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class CreateThanseehUser1547919837483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.username = "thanseeh";
    user.password = "thanseeh";
    user.hashPassword();
    user.role = "ADMIN";
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}