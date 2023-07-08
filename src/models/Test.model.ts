import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Test {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  created_at: Date;

  constructor(obj?: Object) {
    this.created_at = new Date();

    if (obj) {
      Object.assign(this, obj);
    }
  }
}

export default Test;
