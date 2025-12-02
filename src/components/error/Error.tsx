type ErrorProps = {
  message?: string;
};

export const Error = ({ message }: ErrorProps) => {
  return (
    <p className="text-sm text-red-600 mt-1">
      {message ?? 'Something is wrong'}
    </p>
  );
};
