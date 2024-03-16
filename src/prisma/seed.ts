import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main(){
    await prisma.employee.create({
       data: {
        email: 'adm@adm.com',
        name: 'Admin',
        password: '123456',
        roles: 'adm',
        salt: '123',
        company: {
            create: {
                cnpj: '123',
                name: 'Company',
                slug: 'company'
            }
        }
       }
    })
   
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })