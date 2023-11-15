import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { DataResDTO } from '../dtos/data-res.dto';

export const ApiCreatedDataWrapResponse = <DataDTO extends Type<unknown>>(
  dataDTO: DataDTO,
) =>
  applyDecorators(
    ApiExtraModels(DataResDTO, dataDTO),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(DataResDTO) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(dataDTO),
              },
            },
          },
        ],
      },
    }),
  );
