"use client";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const Page: React.FC = () => {
  const router = useRouter();

  // State để lưu các giá trị input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State để xử lý thông báo lỗi hoặc trạng thái đăng ký
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    // Kiểm tra các trường hợp sai
    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }

    setLoading(true);
    setError(null); // Xóa lỗi trước khi gửi yêu cầu

    try {
      // Gửi yêu cầu đăng ký đến API
      const response = await axios.post("http://localhost:3000/auth/register", {
        email: email,
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
      });

      // Xử lý thành công: Chuyển hướng đến trang đăng nhập
      router.push("/login");
    } catch (error: any) {
      setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
      console.error("Register error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-28 w-1/3  bg-white border rounded-2xl flex flex-col p-5 gap-5 pb-8">
        <div className="flex justify-center items-center w-full text-beamin font-semibold text-[26px]">
          Đăng Kí
        </div>
        <div className="flex flex-row w-full gap-2">
          <Input
            placeholder="Họ"
            className="h-[40px]"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Tên"
            className="h-[40px]"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Tên đăng nhập"
            className="h-[40px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Số điện thoại"
            className="h-[40px]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input
            placeholder="Email"
            className="h-[40px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ">
          <Input.Password
            placeholder="Mật khẩu"
            className="h-[40px]"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ">
          <Input.Password
            placeholder="Nhập lại mật khẩu"
            className="h-[40px]"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div className="flex flex-col w-full">
          <button
            className="w-full h-[40px] uppercase text-white bg-beamin rounded-lg"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Đang đăng ký..." : "Đăng Ký"}
          </button>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-gray-600">Bạn đã có tài khoản? </span>
          <Link className="text-beamin cursor-pointer" href={"/login"}>
            {" "}
            Đăng nhập
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
