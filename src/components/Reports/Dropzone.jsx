"use client";
import { Flex, Box, FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { uploadDocs } from "../../../public/assets";

const Dropzone = ({ name, files, onFileChange, onRemoveFile }) => {

  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      gap="1rem"
      direction="column"
      className="container"
    >
      <Box
        w="100%"
        className="dropzone"
        name={name}
      >
        <FormControl id="task_image">
          <Flex
            w={{
              base: "17.5rem",
              sm: "30rem",
            }}
            justify="center"
            align="center"
            gap="1rem"
            direction="column"
            className="!text-white !mb-2 !text-sm !font-outfit !bg-[#0E1515] !border-[1px] !py-12 !px-6 !border-[rgba(255,255,255,0.08)] !rounded-lg"
          >
            <FormLabel htmlFor="file" id={name}>
              <Input
                id="file"
                type="file"
                name={name}
                className="!hidden"
                multiple
                onChange={onFileChange}
              />
              <Image src={uploadDocs} alt="upload-document" />
            </FormLabel>
          </Flex>

          <Flex justify="space-between" align="center" gap="0rem">
            <Box spacing={2}>
              {files?.length > 0 &&
                files.map((file, i) => (
                  <Button
                    key={i}
                    onClick={() => onRemoveFile(file.name)}
                    rightIcon={<MdOutlineCancel />}
                    iconSpacing={"0.5rem !important"}
                    className="!text-xs !py-[0.3px] !px-2"
                    border="1px solid var(--darkmode-strokes-tinted, rgba(125, 249, 255, 0.12))"
                    borderRadius="full"
                    color="white"
                    sx={{
                      backgroundColor: "var(--darkmode-bg-01, #0E1515) !important",
                    }}
                  >
                    PNG{i + 1}
                  </Button>
                ))
              }
            </Box>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Dropzone;
