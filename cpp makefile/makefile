all: compile execute clean

compile: first.o
	@g++ first.o -o first
first.o: first.cpp
	@g++ -c first.cpp
execute:
	@./first
clean:
	@rm *.o first