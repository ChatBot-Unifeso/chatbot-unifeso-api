// se baseia no arquivo schema.prisma

export class CreateCompanyDto {
  name: string;
  cnpj: string;
  slug: string;
}
